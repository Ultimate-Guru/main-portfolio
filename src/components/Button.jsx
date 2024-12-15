// MIT License

// Copyright (c) 2024 Oluwatosin

import PropTypes from 'prop-types'


// Primary Button
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    download
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={'btn btn-primary ' + classes}
                download={download ? true : undefined}
            >
                {label}

                {icon &&
                    <span className='material-symbols-rounded' aria-hidden='true'>
                        {icon}
                    </span>
                }
            </a>
        )
    } else {
        return (
            <button className={'btn btn-primary ' + classes}>
                {label}

                {icon ?
                    <span className='material-symbols-rounded' aria-hidden='true'>
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}

ButtonPrimary.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.object,
    classes: PropTypes.string,
    download: PropTypes.bool
}


// Outline Button
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={'btn btn-outline ' + classes}
            >
                {label}

                {icon ?
                    <span className='material-symbols-rounded' aria-hidden='true'>
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={'btn btn-outline ' + classes}>
                {label}

                {icon ?
                    <span className='material-symbols-rounded' aria-hidden='true'>
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.object,
    classes: PropTypes.string,
}

export {
    ButtonPrimary,
    ButtonOutline
}