export const RoastLevel = ({ level }: { level: number }) => {
  const getBrownColor = (position: number) => {
    if (position > level) {
      return 'bg-dark-100';
    }

    switch (position) {
      case 1:
        return 'bg-brown-100';
      case 2:
        return 'bg-brown-200';
      case 3:
        return 'bg-brown-300';
      case 4:
        return 'bg-brown-300';
      case 5:
        return 'bg-brown-300';
      default:
        return 'bg-brown-100';
    }
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-2 h-2 rounded-full ${getBrownColor(dot)}`}
        />
      ))}
    </div>
  );
};
