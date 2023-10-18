import type { Schema, Attribute } from '@strapi/strapi';

export interface FeatureFeature extends Schema.Component {
  collectionName: 'components_feature_features';
  info: {
    displayName: 'Feature';
    icon: 'key';
    description: '';
  };
  attributes: {
    feature: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'feature.feature': FeatureFeature;
    }
  }
}
