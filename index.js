function produceDrivingRange (blockRange) {
    return function(beginningLoc, endingLoc) {
        let drivingDistance = Math.abs(parseInt(beginningLoc)-parseInt(endingLoc))
        if (drivingDistance <= blockRange) {
            return `within range by ${blockRange - drivingDistance}`
        } else {
            return `${drivingDistance - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator (percentage) {
    return function(tip) {
        return percentage * tip
    }
}