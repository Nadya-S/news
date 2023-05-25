const NestedComment = ({comment, data}) => {
    console.log(comment)
    console.log(JSON.stringify(data, null, 2))
    // console.log(Object.keys(data).length === allComents.length)
    // console.log('loading', isLoading)

    const getKids =  (kids) => {
      console.log('kids', kids)
      return kids.map(id => {
        console.log('data id', data[id])
        if(id in data) {
            console.log('render')
            return <NestedComment comment={data[id]} data={data} key={id}/>
        }
      });
    //   console.log('result', result)
    //   return result;
    //   kids.map((id) => {
    //     console.log('id', id)
    //     console.log('id in data', id in data)
    //     if (id in data) {
    //         console.log('render')
    //         console.log('data id', data[id])
    //         return <NestedComment comment={data[id]} data={data}/>
    //     }
    //   })
        // for (let i = 0; i < kids.length; i++) {
            
        //     let id = String(kids[i])
        //     console.log('comment', data, id)
            // console.log('id in data', id in data)
        //     if (id in data) {
        //       return <NestedComment comment={data[id]} data={data}/>
        //     } 
        // }

    }

    return(
        <li>
            {comment.text}
            {comment.hasOwnProperty('kids') ? <ul>{getKids(comment.kids)}</ul> : null}
        </li>

    )
}

export default NestedComment;