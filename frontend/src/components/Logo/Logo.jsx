import styles from './Logo.module.css'

function Logo(props) {
    const className = `${styles.logo} new-rocker-regular ${props.className || ''}`

    return (
        <span className={className}>
            EC
        </span>
    )
}

export default Logo