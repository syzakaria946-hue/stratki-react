import type { SkillsProps } from "../type/skills"


const CardSvg = ({title, percentage, description}:SkillsProps) => {
  return (
    <div className="text-center flex flex-col items-center  gap-3">
        <div className="w-30">
            <svg viewBox="0 0 36 36" className="w-full h-full shrink-0">
                < path d="M18 2a16 16 0 010 32 16 16 0 010-32" strokeDasharray="100" strokeWidth="2.8" strokeLinecap="round" stroke="#F8F8F8" fill="#fff"/>
                  < path d="M18 2a16 16 0 010 32 16 16 0 010-32" strokeDasharray={`${percentage}, 100 `}strokeWidth="2.8" strokeLinecap="round" stroke="#5BC86D" fill="#fff"/>
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#5BC86D" className="text-xs font-normal relative">{percentage}</text>
            </svg>
        </div>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>

        </div>
    </div>
  )
}

export default CardSvg