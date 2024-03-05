type CMSIconProps = {
  icon: string
  className?: string
}

export const CMSIcon = ({ icon, className }: CMSIconProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: icon }} className={className} />
  )
}
