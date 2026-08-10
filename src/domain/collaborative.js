export const COLLECTIONS = Object.freeze({
  users: 'users',
  profiles: 'profiles',
  projects: 'projects',
  opportunities: 'opportunities',
  expressionsOfInterest: 'expressionsOfInterest',
  collaborationInvitations: 'collaborationInvitations',
  matches: 'matches',
  conversations: 'conversations',
  messages: 'messages',
  collaborations: 'collaborations',
  notifications: 'notifications',
  collaborativeTeamRequests: 'collaborativeTeamRequests',
  reports: 'reports',
  blocks: 'blocks',
  skills: 'skills',
  adminAuditLogs: 'adminAuditLogs',
});

export const USER_INTENTS = Object.freeze({
  hasIdea: 'HAS_IDEA',
  hasSkills: 'HAS_SKILLS',
  hasProduct: 'HAS_PRODUCT',
  moveImmediately: 'MOVE_IMMEDIATELY',
});

export const USER_INTENT_OPTIONS = Object.freeze([
  {
    value: USER_INTENTS.hasIdea,
    title: "J'ai une idée",
    description: 'Trouver les bonnes personnes pour cadrer, construire et lancer un projet.',
    nextStep: 'CREATE_PROJECT',
  },
  {
    value: USER_INTENTS.hasSkills,
    title: "J'ai des compétences",
    description: 'Créer un profil talent et découvrir des projets auxquels contribuer.',
    nextStep: 'CREATE_TALENT_PROFILE',
  },
  {
    value: USER_INTENTS.hasProduct,
    title: "J'ai déjà un produit",
    description: 'Rencontrer des profils capables de faire grandir un produit existant.',
    nextStep: 'CREATE_PROJECT',
  },
  {
    value: USER_INTENTS.moveImmediately,
    title: 'Je veux avancer immédiatement',
    description: "Parler à l'équipe Collaborative pour cadrer ou exécuter plus vite.",
    nextStep: 'CONTACT_COLLABORATIVE_TEAM',
  },
]);

export const PROJECT_STAGES = Object.freeze({
  idea: 'IDEA',
  problemValidated: 'PROBLEM_VALIDATED',
  concept: 'CONCEPT',
  prototype: 'PROTOTYPE',
  mvpInProgress: 'MVP_IN_PROGRESS',
  mvpLive: 'MVP_LIVE',
  earlyTraction: 'EARLY_TRACTION',
  growth: 'GROWTH',
});

export const PROJECT_STATUSES = Object.freeze({
  draft: 'DRAFT',
  active: 'ACTIVE',
  paused: 'PAUSED',
  archived: 'ARCHIVED',
});

export const OPPORTUNITY_STATUSES = Object.freeze({
  draft: 'DRAFT',
  published: 'PUBLISHED',
  paused: 'PAUSED',
  filled: 'FILLED',
  closed: 'CLOSED',
});

export const REQUEST_STATUSES = Object.freeze({
  pending: 'PENDING',
  accepted: 'ACCEPTED',
  declined: 'DECLINED',
  withdrawn: 'WITHDRAWN',
});

export const MATCH_STATUSES = Object.freeze({
  active: 'ACTIVE',
  closed: 'CLOSED',
  convertedToCollaboration: 'CONVERTED_TO_COLLABORATION',
});

export const COLLABORATION_STATUSES = Object.freeze({
  pendingConfirmation: 'PENDING_CONFIRMATION',
  active: 'ACTIVE',
  paused: 'PAUSED',
  completed: 'COMPLETED',
  ended: 'ENDED',
});

export const COLLABORATION_MODES = Object.freeze({
  coFounder: 'CO_FOUNDER',
  equity: 'EQUITY',
  revenueShare: 'REVENUE_SHARE',
  coBuild: 'CO_BUILD',
  paid: 'PAID',
  hybrid: 'HYBRID',
  exploratory: 'EXPLORATORY',
  other: 'OTHER',
});

export const NOTIFICATION_STATUSES = Object.freeze({
  unread: 'UNREAD',
  read: 'READ',
  archived: 'ARCHIVED',
});

export const NOTIFICATION_TYPES = Object.freeze({
  interestReceived: 'INTEREST_RECEIVED',
  interestAccepted: 'INTEREST_ACCEPTED',
  interestDeclined: 'INTEREST_DECLINED',
  invitationReceived: 'INVITATION_RECEIVED',
  invitationAccepted: 'INVITATION_ACCEPTED',
  invitationDeclined: 'INVITATION_DECLINED',
  matchCreated: 'MATCH_CREATED',
  messageReceived: 'MESSAGE_RECEIVED',
  collaborationRequested: 'COLLABORATION_REQUESTED',
  collaborationConfirmed: 'COLLABORATION_CONFIRMED',
});

export function canUserApplyToOpportunity({ userId, opportunity, existingExpression }) {
  if (!userId || !opportunity) {
    return false;
  }

  if (opportunity.createdBy === userId || opportunity.ownerId === userId) {
    return false;
  }

  if (opportunity.status !== OPPORTUNITY_STATUSES.published) {
    return false;
  }

  return !isActiveRequest(existingExpression);
}

export function canOpenMessagingChannel({ requestStatus, hasExistingConversation }) {
  return requestStatus === REQUEST_STATUSES.accepted || Boolean(hasExistingConversation);
}

export function canConfirmCollaboration({ match, currentUserId }) {
  if (!match || !currentUserId) {
    return false;
  }

  return match.status === MATCH_STATUSES.active && match.participantIds?.includes(currentUserId);
}

export function isActiveRequest(request) {
  return Boolean(
    request &&
      [REQUEST_STATUSES.pending, REQUEST_STATUSES.accepted].includes(request.status),
  );
}

export function buildNotification({ recipientId, type, actorId, entityId, payload = {} }) {
  if (!recipientId || !type) {
    throw new Error('A notification requires recipientId and type.');
  }

  return {
    recipientId,
    type,
    actorId: actorId || null,
    entityId: entityId || null,
    payload,
    status: NOTIFICATION_STATUSES.unread,
    createdAt: null,
    readAt: null,
  };
}

export function getOnboardingNextStep(intents = []) {
  if (intents.includes(USER_INTENTS.moveImmediately)) {
    return 'CONTACT_COLLABORATIVE_TEAM';
  }

  if (intents.includes(USER_INTENTS.hasSkills)) {
    return 'CREATE_TALENT_PROFILE';
  }

  if (intents.includes(USER_INTENTS.hasIdea) || intents.includes(USER_INTENTS.hasProduct)) {
    return 'CREATE_PROJECT';
  }

  return 'DISCOVER';
}
