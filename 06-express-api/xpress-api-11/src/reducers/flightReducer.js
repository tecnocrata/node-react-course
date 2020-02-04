
const flightReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FLIGHT':
            return state.concat([action.data]);
        case 'DELETE_FLIGHT':
            return state.filter((flight)=>flight.number !== action.number);
        case 'EDIT_FLIGHT':
            return state.map((flight)=>flight.number === action.number ? {...flight,editing:!flight.editing}:flight); //changing the editing FLAG!
        case 'UPDATE':
            return state.map((flight)=>{
              if(flight.number === action.number) {
                return {
                   ...flight,
                   origin:action.data.origin,
                   destination:action.data.destination,
                   editing: !flight.editing
                }
              } else return flight;
            })
        default:
            return state;
    }
}
export default flightReducer;