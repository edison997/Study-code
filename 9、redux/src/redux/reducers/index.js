const initState ={data:'默认值'}

export const reducer = (state = initState,action) => {
  console.log('reducer',state,action);
  const {type,data} = action
  switch (type) {
    case 'sendType':
      return Object.assign({},state,action)
  
    default:
      return state
  }
}