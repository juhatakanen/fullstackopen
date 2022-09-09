const Message = ({ classType, message }) => {
    if (classType === '') {
      return null
    } else if (classType === 'error') {
        return (
            <div className="error">
                <p>{message}</p>
            </div>
        )
    }
    return (
        <div className="success">
          <p>{message}</p>
        </div>
    )
  }

export default Message