import { CHANNELS } from '../constants'

interface Props {
  selected: string | null
  onSelect: (c: string | null) => void
}

export default function ChannelTabs({ selected, onSelect }: Props) {
  return (
    <div className="flex space-x-2 p-2 border-b" role="tablist">
      <button
        className={`p-2 ${selected === null ? 'border-b-2' : ''}`}
        onClick={() => onSelect(null)}
      >
        All
      </button>
      {Object.entries(CHANNELS).map(([key, ch]) => {
        const Icon = ch.icon
        return (
          <button
            key={key}
            className={`p-2 flex items-center space-x-1 ${selected === key ? 'border-b-2' : ''}`}
            onClick={() => onSelect(key)}
            style={{ color: ch.color }}
          >
            <Icon size={16} />
            <span className="hidden sm:inline">{ch.name}</span>
          </button>
        )
      })}
    </div>
  )
}
