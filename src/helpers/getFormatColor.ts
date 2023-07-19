export const getStatusColor = (status: string) => {
  let color = 'success';
  switch (status) {
    case 'approve':
      color = 'success';
      break;
    case 'reject':
      color = 'error';
      break;
    case 'pending':
      color = 'warning';
      break;

    default:
      break;
  }

  return color;
};

export const getColorChip = (level: string) => {
  let color = 'success';
  if (level == 'Medium') {
    color = 'success';
  } else if (level == 'Easy') {
    color = 'primary-500';
  } else {
    color = 'error';
  }

  return color;
};
