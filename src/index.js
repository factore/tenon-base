// Vendor
require('./react-ujs');

import * as features from 'tenon-features';
import {
  Breadcrumbs,
  ResourceIndex,
  ResourceIndexComponents,
  StandaloneList
} from 'tenon-components';

// Make jQuery requests identify themselves as json
$.ajaxSetup({
  dataType: 'json',
  'beforeSend': function(xhr) {
    xhr.setRequestHeader('Accept', 'application/json');
  }
});

const Tenon = {
  RI: {
    'Root': ResourceIndex,
    'StandaloneList': StandaloneList
  },

  reactComponents: { Breadcrumbs },

  modalHandlers: features.modalHandlers,

  init: function() {
    // init pickadate
    $('[data-behavior=datepicker]').pickadate();
    $('[data-behavior=timepicker]').pickatime();

    // Set up modals
    Tenon.modals = new features.ModalWindows();

    // Mount components right away
    window.ReactRailsUJS.mountComponents();

    new features.AssetCropping();
    new features.AssetDetachment();
    new features.CocoonHooks();
    new features.Dropdown();
    new features.Expandable();
    new features.Flash();
    new features.FocusError();
    new features.GenericClassToggler();
    new features.I18nFields();
    new features.ItemVersionAutosave();
    new features.NavItemToggle();
    new features.ProtectChanges();
    new features.SortableNestedFields();
    new features.Tabs();
    new features.TenonContent();
    new features.ToggleMainNav();

    // Mount components again after features are done
    window.ReactRailsUJS.mountComponents();
  }
};

Tenon.RI = { ...Tenon.RI, ...ResourceIndexComponents };

export default Tenon;
