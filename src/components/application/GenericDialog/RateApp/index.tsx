import React from 'react';
import GenericDialog from '../GenericDialog';
import { useDialogState } from '../useDialogState';
import Rating from '../../DialogField/Rating';

export const title = 'Rate Application';

export default function RateApp({ id = title, onClose, ...other }) {
  const [, setDialogState] = useDialogState(id);

  const handleSubmit = React.useCallback(
    values => {
      // TO DO: Insert into database
      setDialogState(prev => ({ ...prev, open: false, submitting: false, errors: {} }));
      onClose && onClose();
    },
    [setDialogState, onClose]
  );

  const handleValidation = (values, dialogState) => {
    var errors = { ...dialogState.errors };
    return errors;
  };

  return (
    <GenericDialog
      id={id}
      title={title}
      submitLabel='Submit'
      onSubmit={handleSubmit}
      onClose={onClose}
      validate={handleValidation}
      initialValues={{}}
      fields={[
        { id: 'appId', hidden: true },
        { id: 'name', label: 'Enter name of reviewer', xs: 8, initialValue: 'Anonymous', required: true },
        { id: 'rating', label: 'Select Rating', Field: Rating, xs: 4, required: true },
        {
          id: 'review',
          label: 'Enter Review',
          multiline: true,
          rows: 10,
          xs: 12,
          required: true,
          autoFocus: true
        }
      ]}
      {...other}
    />
  );
}
