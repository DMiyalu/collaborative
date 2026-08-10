import {
  MATCH_STATUSES,
  NOTIFICATION_STATUSES,
  NOTIFICATION_TYPES,
  OPPORTUNITY_STATUSES,
  REQUEST_STATUSES,
  buildNotification,
  canConfirmCollaboration,
  canOpenMessagingChannel,
  canUserApplyToOpportunity,
  isActiveRequest,
} from './collaborative';

describe('Collaborative domain rules', () => {
  test('prevents users from applying to their own opportunity', () => {
    expect(
      canUserApplyToOpportunity({
        userId: 'user-1',
        opportunity: {
          createdBy: 'user-1',
          status: OPPORTUNITY_STATUSES.published,
        },
      }),
    ).toBe(false);
  });

  test('allows a talent to apply to a published opportunity without active request', () => {
    expect(
      canUserApplyToOpportunity({
        userId: 'talent-1',
        opportunity: {
          createdBy: 'owner-1',
          status: OPPORTUNITY_STATUSES.published,
        },
      }),
    ).toBe(true);
  });

  test('blocks duplicate active expressions of interest', () => {
    expect(
      canUserApplyToOpportunity({
        userId: 'talent-1',
        opportunity: {
          createdBy: 'owner-1',
          status: OPPORTUNITY_STATUSES.published,
        },
        existingExpression: {
          status: REQUEST_STATUSES.pending,
        },
      }),
    ).toBe(false);
  });

  test('opens messaging only after an accepted request or existing conversation', () => {
    expect(canOpenMessagingChannel({ requestStatus: REQUEST_STATUSES.pending })).toBe(false);
    expect(canOpenMessagingChannel({ requestStatus: REQUEST_STATUSES.accepted })).toBe(true);
    expect(canOpenMessagingChannel({ hasExistingConversation: true })).toBe(true);
  });

  test('allows only active match participants to confirm collaboration', () => {
    expect(
      canConfirmCollaboration({
        currentUserId: 'talent-1',
        match: {
          status: MATCH_STATUSES.active,
          participantIds: ['owner-1', 'talent-1'],
        },
      }),
    ).toBe(true);

    expect(
      canConfirmCollaboration({
        currentUserId: 'other-user',
        match: {
          status: MATCH_STATUSES.active,
          participantIds: ['owner-1', 'talent-1'],
        },
      }),
    ).toBe(false);
  });

  test('treats pending and accepted requests as active', () => {
    expect(isActiveRequest({ status: REQUEST_STATUSES.pending })).toBe(true);
    expect(isActiveRequest({ status: REQUEST_STATUSES.accepted })).toBe(true);
    expect(isActiveRequest({ status: REQUEST_STATUSES.declined })).toBe(false);
    expect(isActiveRequest(null)).toBe(false);
  });

  test('builds unread notifications for Firestore stream consumption', () => {
    expect(
      buildNotification({
        recipientId: 'owner-1',
        actorId: 'talent-1',
        type: NOTIFICATION_TYPES.interestReceived,
        entityId: 'interest-1',
        payload: { opportunityId: 'opportunity-1' },
      }),
    ).toEqual({
      recipientId: 'owner-1',
      actorId: 'talent-1',
      type: NOTIFICATION_TYPES.interestReceived,
      entityId: 'interest-1',
      payload: { opportunityId: 'opportunity-1' },
      status: NOTIFICATION_STATUSES.unread,
      createdAt: null,
      readAt: null,
    });
  });
});
