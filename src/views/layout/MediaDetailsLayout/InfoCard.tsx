export const InfoCard = ({
  title,
  value,
  valueClass = '',
}: {
  title: string
  value?: string
  valueClass?: string
}) => (
  <article className='p-5 rounded-lg border border-border'>
    <h2 className='text-lg font-semibold mb-1'>{title}</h2>
    <p className={`text-muted-foreground font-medium ${valueClass}`}>
      {value || '-'}
    </p>
  </article>
)
