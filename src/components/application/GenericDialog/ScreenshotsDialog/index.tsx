import React from 'react';
import GenericDialog from '../GenericDialog';
import { DialogContent } from '@material-ui/core';
import Screenshots from './Screenshots';
import { useDialogState } from '../useDialogState';

export const title = 'Screenshots';

export default function ExploreQuestionsDialog({ id = title }) {
  const [{ initialValues = {} }] = useDialogState(id);
  const { images = {} } = initialValues;
  return (
    <GenericDialog id={id} title={id} submitLabel={null} cancelLabel='Close' maxWidth='md'>
      <DialogContent dividers>
        <Screenshots images={images} />
      </DialogContent>
    </GenericDialog>
  );
}
