export const translateStatus = (status: string): string => {
  switch (status) {
    case 'Released':
      return 'Lançado'
    case 'In Production':
      return 'Em Produção'
    case 'Post Production':
      return 'Pós-Produção'
    case 'Planned':
      return 'Planejado'
    case 'Canceled':
      return 'Cancelado'
    case 'Ended':
      return 'Finalizado'
    case 'Returning Series':
      return 'Em Andamento'
    case 'Pilot':
      return 'Piloto'
    default:
      return '-'
  }
}
