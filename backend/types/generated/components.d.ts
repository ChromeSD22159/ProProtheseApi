import type { Schema, Attribute } from '@strapi/strapi';

export interface ChangeLogChangeLog extends Schema.Component {
  collectionName: 'components_change_log_change_logs';
  info: {
    displayName: 'ChangeLog';
    description: '';
  };
  attributes: {
    Version: Attribute.String;
    feature: Attribute.Component<'feature.feature1', true> & Attribute.Required;
  };
}

export interface FeatureFeature1 extends Schema.Component {
  collectionName: 'components_feature_feature1s';
  info: {
    displayName: 'Feature';
    icon: 'alien';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'change-log.change-log': ChangeLogChangeLog;
      'feature.feature1': FeatureFeature1;
    }
  }
}
