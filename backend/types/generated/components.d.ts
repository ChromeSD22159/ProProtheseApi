import type { Schema, Attribute } from '@strapi/strapi';

export interface ColletionsApps extends Schema.Component {
  collectionName: 'components_colletions_apps';
  info: {
    displayName: 'Apps';
    description: '';
  };
  attributes: {
    titel: Attribute.String;
    apps: Attribute.Component<'shared.app-preview', true>;
  };
}

export interface GlobalAppPreview extends Schema.Component {
  collectionName: 'components_global_app_previews';
  info: {
    displayName: 'AppPreview';
    icon: 'apps';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
    links: Attribute.Component<'shared.label-link', true>;
    subline: Attribute.String;
    platforms: Attribute.Enumeration<
      ['iOS', 'WatchOS', 'iPadOs', 'MacOs', 'Android']
    >;
  };
}

export interface GlobalContacts extends Schema.Component {
  collectionName: 'components_global_contacts';
  info: {
    displayName: 'contacts';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'shared.label-link', true>;
  };
}

export interface GlobalHero extends Schema.Component {
  collectionName: 'components_global_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    titel: Attribute.RichText;
    image: Attribute.Media;
    content: Attribute.RichText;
    component: Attribute.Enumeration<['hero']> & Attribute.Required;
  };
}

export interface GlobalNavigationPanel extends Schema.Component {
  collectionName: 'components_global_navigation_panels';
  info: {
    displayName: 'Navigation Panel';
  };
  attributes: {
    sections: Attribute.Component<'global.navigation-section', true>;
  };
}

export interface GlobalNavigationSection extends Schema.Component {
  collectionName: 'components_global_navigation_sections';
  info: {
    displayName: 'Navigation Section';
  };
  attributes: {
    titel: Attribute.String;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    theme: Attribute.Enumeration<['dark', 'light']> &
      Attribute.DefaultTo<'dark'>;
    panels: Attribute.Component<'global.navigation-panel', true>;
  };
}

export interface GlobalSectionChildPrimary extends Schema.Component {
  collectionName: 'components_global_section_child_primaries';
  info: {
    displayName: 'SectionHero';
    description: '';
  };
  attributes: {
    titel: Attribute.RichText;
    image: Attribute.Media;
    content: Attribute.RichText;
    component: Attribute.Enumeration<['hero']> & Attribute.Required;
  };
}

export interface GlobalSettings extends Schema.Component {
  collectionName: 'components_global_settings';
  info: {
    displayName: 'Settings';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'shared.toggle', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedAppPreview extends Schema.Component {
  collectionName: 'components_shared_app_previews';
  info: {
    displayName: 'AppPreview';
    icon: 'apps';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image: Attribute.Media & Attribute.Required;
    links: Attribute.Component<'shared.label-link', true>;
    subline: Attribute.String;
    platforms: Attribute.Enumeration<
      ['iOS', 'WatchOS', 'iPadOs', 'MacOs', 'Android']
    >;
  };
}

export interface SharedFeature1 extends Schema.Component {
  collectionName: 'components_feature_feature1s';
  info: {
    displayName: 'Feature';
    icon: 'alien';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface SharedLabelLink extends Schema.Component {
  collectionName: 'components_shared_label_links';
  info: {
    displayName: 'LabelLink';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']>;
    icon: Attribute.Enumeration<
      ['none', 'apple', 'xing', 'github', 'phone', 'mail', 'instagram']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'none'>;
    component: Attribute.Enumeration<
      [
        'ButtonIconCard',
        'ButtonLabelWithAnimatedIcon',
        'BottonFootLink',
        'BottonFootSocialIconLink'
      ]
    > &
      Attribute.Required;
  };
}

export interface SharedTextContent extends Schema.Component {
  collectionName: 'components_shared_text_contents';
  info: {
    displayName: 'TextContent';
    description: '';
  };
  attributes: {
    titel: Attribute.String;
    content: Attribute.RichText;
    component: Attribute.Enumeration<['content']> &
      Attribute.Required &
      Attribute.DefaultTo<'content'>;
  };
}

export interface SharedToggle extends Schema.Component {
  collectionName: 'components_shared_toggles';
  info: {
    displayName: 'toggle';
    description: '';
  };
  attributes: {
    desc: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    state: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'colletions.apps': ColletionsApps;
      'global.app-preview': GlobalAppPreview;
      'global.contacts': GlobalContacts;
      'global.hero': GlobalHero;
      'global.navigation-panel': GlobalNavigationPanel;
      'global.navigation-section': GlobalNavigationSection;
      'global.navigation': GlobalNavigation;
      'global.section-child-primary': GlobalSectionChildPrimary;
      'global.settings': GlobalSettings;
      'shared.app-preview': SharedAppPreview;
      'shared.feature1': SharedFeature1;
      'shared.label-link': SharedLabelLink;
      'shared.text-content': SharedTextContent;
      'shared.toggle': SharedToggle;
    }
  }
}
