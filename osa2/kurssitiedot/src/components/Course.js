const Header = ({course}) => {
    return (
        <>
        <h1>{course.name}</h1>
        </>
    )
}

const Content = ({course}) => {
    return (
        <>
        {course.parts.map(part => <Part key={part.id} part={part}/>)}
        </>
    )
}
   
const Part = ({part}) => {
    return (
        <>
        <p>{part.name} {part.exercises}</p>
        </>
    )
}

const Total = ({course}) => {
    return (
        <>
        <p>total of {course.parts.reduce((total, part) => {
            return total + part.exercises
        }, 0)}</p>
        </>
    )
}

const Course = ({ course }) => {
    return (
        <>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
        </>
    )
}

export default Course