import { isHybrid, isWeChat } from '@/utils/env'

let UPLOADIMAGES, PREVIEWIMAGES, PICKIMAGES

if (isHybrid()) {
    UPLOADIMAGES = function () {

    }
    PREVIEWIMAGES = function () {

    }
} else if (isWeChat()) {

} else {
    UPLOADIMAGES = function () {

    }
    PREVIEWIMAGES = function () {

    }
    PICKIMAGES = function () {

    }
}

export {
    UPLOADIMAGES,
    UPLOADIMAGES,
    PICKIMAGES
}