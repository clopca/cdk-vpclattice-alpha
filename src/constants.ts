export const TARGET_GROUP = {
  NAME_FORMAT: /^(?!tg-)(?!-)(?!.*-$)(?!.*--)[a-z0-9-]+$/,
  NAME_MIN_LENGTH: 3,
  NAME_MAX_LENGTH: 128,
};

export const HEALTH_CHECK = {
  MIN_HEALTHY_THRESHOLD_COUNT: 1,
  MAX_HEALTHY_THRESHOLD_COUNT: 10,
};
