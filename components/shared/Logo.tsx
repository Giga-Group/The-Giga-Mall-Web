import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  priority?: boolean;
}

const Logo = ({ width = 180, height = 60, priority = false }: LogoProps) => {
  return (
    <Image
      src="/Giga Mall_.png"
      alt="Giga Mall"
      width={width}
      height={height}
      style={{ objectFit: 'contain', height: '100%', width: 'auto' }}
      priority={priority}
    />
  );
};

export default Logo;

