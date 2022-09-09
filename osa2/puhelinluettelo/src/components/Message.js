const Message = ({ classType, message }) => {
    if (classType === '') {
      return null
    } else if (classType === 'error') {
        return (
            <div className="error">
                <p>Information of {message} has already been removed from the server</p>
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