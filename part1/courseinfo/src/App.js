const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (<div>
      <h1>{props.course}</h1>
    </div>)
  }

  const Part = (props) => {
    return (
      <>
        <p>{props.partName} {props.numOfExcercises}</p>
      </>
    )
  }

  const Content = (props) => {
    const allParts = props.parts.map(part => {
      return <Part 
        partName = {part.name}
        numOfExcercises = {part.exercises}
      />
    })
    return (<>
      {allParts}
    </>)
  }

  const Total = (props) => {
    return (<>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>)
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content 
         parts={course.parts} 
      />
      <Total 
       parts={course.parts}
      />
    </div>
  )
}

export default App
