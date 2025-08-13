interface DodecahedronLogoProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export function DodecahedronLogo({ size = 32, className = "" }: DodecahedronLogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{ 
          filter: 'drop-shadow(0 0 8px var(--delft-blue)) drop-shadow(0 0 16px var(--cambridge-blue))'
        }}
      >
        {/* Simple geometric diamond/crystal shape */}
        <g>          
          {/* Main diamond shape */}
          <polygon 
            points="50,10 25,35 50,85 75,35" 
            fill="var(--cambridge-blue)"
            fillOpacity="0.2"
            stroke="var(--delft-blue)"
            strokeWidth="2"
          />
          
          {/* Top facet */}
          <polygon 
            points="50,10 25,35 50,45 75,35" 
            fill="var(--delft-blue)"
            fillOpacity="0.3"
            stroke="var(--cambridge-blue)"
            strokeWidth="1.5"
          />
          
          {/* Center line for depth */}
          <line 
            x1="50" y1="10" 
            x2="50" y2="85" 
            stroke="var(--light-green)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          
          {/* Side edges for 3D effect */}
          <line 
            x1="25" y1="35" 
            x2="50" y2="45" 
            stroke="var(--cambridge-blue)"
            strokeWidth="1"
            opacity="0.7"
          />
          <line 
            x1="75" y1="35" 
            x2="50" y2="45" 
            stroke="var(--cambridge-blue)"
            strokeWidth="1"
            opacity="0.7"
          />
        </g>
      </svg>
    </div>
  );
}