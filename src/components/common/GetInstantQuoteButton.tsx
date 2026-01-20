import Link from 'next/link'

interface GetInstantQuoteButtonProps {
  href?: string
  className?: string
  onClick?: () => void
  variant?: 'default' | 'mobile' | 'book-demo'
  text?: string
}

const GetInstantQuoteButton = ({
  href = '/quote',
  className = '',
  onClick,
  variant = 'default',
  text
}: GetInstantQuoteButtonProps) => {
  const isBookDemo = variant === 'book-demo'
  const buttonWidth = variant === 'mobile' ? '100%' : isBookDemo ? 'auto' : '221px'
  const buttonHeight = '48px'
  const buttonText = text || (isBookDemo ? 'Book a Demo' : 'Get Instant Quote')

  if (isBookDemo) {
    // Book a Demo button - white outline style
    return (
      <Link
        href={href}
        className={`flex items-center justify-center gap-3 rounded-[24px] border-2 border-white text-white font-normal text-[17px] leading-6 transition-all hover:bg-white/10 ${className}`}
        style={{
          width: buttonWidth,
          height: buttonHeight,
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
        onClick={onClick}
      >
        <span>{buttonText}</span>
        <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    )
  }

  // Get Instant Quote button - blue gradient style
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: buttonWidth,
        height: buttonHeight,
        background: 'linear-gradient(180deg, var(--gradient-blue-1), var(--gradient-blue-2))',
        borderRadius: '24px',
        padding: '1px',
      }}
    >
      <Link
        href={href}
        className="flex items-center w-full h-full rounded-[24px] text-white font-normal text-[17px] leading-6 transition-all hover:opacity-90 relative overflow-hidden"
        style={{
          background: 'var(--primary-blue)',
          boxShadow: 'inset 4px 4px 16px 0px var(--gradient-blue-1)',
          paddingLeft: '24px',
          paddingRight: '8px',
        }}
        onClick={onClick}
      >
        <span className="flex-shrink-0">{buttonText}</span>
        {/* Arrow with gradient circle background matching button border gradient */}
        <div
          className="flex items-center justify-center rounded-full flex-shrink-0 ml-auto"
          style={{
            width: '32px',
            height: '32px',
            background: '#3B49E6',
            borderColor: 'linear-gradient(180deg, #A9B0FF 0%, #A3AAFF 100%)',
            boxShadow: '4px 4px 16px 0px #A9B0FF inset'
          }}
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default GetInstantQuoteButton

