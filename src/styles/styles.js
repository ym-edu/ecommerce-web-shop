import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: { //name of class
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'between',
  },
}))
