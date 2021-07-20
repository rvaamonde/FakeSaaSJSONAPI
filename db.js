var faker = require('faker');

module.exports = function () {


    var data = {
        workspace_one_uem: workspace_one_uem()
    }


    return data;
}

function workspace_one_uem() {
    subdata = []

    for (var i = 0; i < 1000; i++) {
        asset_number = faker.datatype.string()

        subdata.push({
            EasIds: {
                EasId: [
                    faker.datatype.string()
                ]
            },
            TimeZone: faker.address.country() + "/" + faker.address.city(),
            Udid: asset_number,
            SerialNumber: faker.datatype.string(),
            MacAddress: faker.datatype.string(),
            Imei: faker.datatype.string(),
            EasId: faker.datatype.string(),
            AssetNumber: asset_number
        })
    }

    return subdata;
}