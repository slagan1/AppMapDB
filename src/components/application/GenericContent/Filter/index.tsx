import React from 'react';
import GenericContent from '../GenericContent';
import MultiSelectCheck from '../../DialogField/MultiSelectCheck';
import {
  Features,
  Conditions,
  Platforms,
  Costs,
  ClinicalFoundations,
  Privacies,
  Functionalities,
  DeveloperTypes,
  Engagements,
  Uses
} from '../../../../database/models/Application';
import { useFullScreen } from '../../../../hooks';

export const title = 'Apply Filters';
const maxWidth = 400;
const minWidth = 280;

export default function FilterContent({ id = title, advanced, ...other }) {
  const fullScreen = useFullScreen();
  const width = fullScreen ? 290 : 700;
  const hidden = !advanced;
  return (
    <GenericContent
      id={id}
      submitLabel={null}
      cancelLabel='Close'
      width={width}
      fields={[
        {
          id: 'Platforms',
          Field: MultiSelectCheck,
          items: Platforms.map(label => ({ value: label, label })),
          style: { minWidth, maxWidth }
        },
        {
          id: 'Cost',
          Field: MultiSelectCheck,
          items: Costs.map(label => ({ value: label, label })),
          style: { minWidth, maxWidth }
        },
        {
          id: 'DeveloperTypes',
          label: 'Developer Types',
          Field: MultiSelectCheck,
          items: DeveloperTypes.map(label => ({ value: label, label })),
          style: { minWidth, maxWidth }
        },
        {
          id: 'Features',
          Field: MultiSelectCheck,
          items: Features.map(label => ({ value: label, label })),
          style: { minWidth, maxWidth }
        },
        {
          id: 'Functionalities',
          Field: MultiSelectCheck,
          items: Functionalities.map(label => ({ value: label, label })),
          style: { minWidth, maxWidth },
          hidden
        },
        {
          id: 'Conditions',
          label: 'Supported Conditions',
          Field: MultiSelectCheck,
          items: Conditions.map(label => ({ value: label, label })),
          style: { minWidth, maxWidth },
          hidden
        },
        {
          id: 'Engagements',
          Field: MultiSelectCheck,
          items: Engagements.map(label => ({ value: label, label })),
          style: { minWidth, maxWidth },
          hidden
        },
        {
          id: 'Privacy',
          Field: MultiSelectCheck,
          items: Privacies.map(label => ({ value: label, label })),
          style: { minWidth, maxWidth },
          hidden
        },
        {
          id: 'Uses',
          Field: MultiSelectCheck,
          items: Uses.map(label => ({ value: label, label })),
          style: { minWidth, maxWidth },
          hidden
        },
        {
          id: 'ClinicalFoundations',
          label: 'Evidence & Clinical Foundations',
          Field: MultiSelectCheck,
          items: ClinicalFoundations.map(label => ({ value: label, label })),
          style: { minWidth, maxWidth },
          hidden
        }
      ]}
      {...other}
    />
  );
}
