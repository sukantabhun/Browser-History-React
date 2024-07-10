import './index.css'

const AppElement = props => {
  const {appDetail, deleteButton} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = appDetail

  const delAppButton = () => {
    deleteButton(id)
  }

  return (
    <li className="element">
      <p className="time">{timeAccessed}</p>
      <div className="element-data">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <div className="name-container">
          <p>{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <button type="button" data-testid="delete" onClick={delAppButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default AppElement
