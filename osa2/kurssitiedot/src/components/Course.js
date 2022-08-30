const Course = (props) => {
    const Header = (props) => {
        return (
            <>
            <h1>{props.course.name}</h1>
            </>
        )
    }

    const Content = (props) => {
        return (
            <>
            <Part part={props.course.parts[0]} />
            <Part part={props.course.parts[1]} />
            <Part part={props.course.parts[2]} />
            </>
        )
    }
    const Part = (props) => {
        return (
            <>
            <p>{props.part.name} {props.part.exercises}</p>
            </>
        )
    }

    return (
        <>
        <Header course={props.course} />
        <Content course={props.course} />
        </>
    )
}

export default Course