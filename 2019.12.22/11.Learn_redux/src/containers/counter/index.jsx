import { connect } from 'react-redux'
import { Add_Number, Jian_Number, Add_number_Async } from '../../reducers/actions'
import counter from '../../components/counter/index'

export default connect(
  state => ({ count: state }),
  { addNumber: Add_Number, jianNumber: Jian_Number, addNumberAsync: Add_number_Async }
)(counter)