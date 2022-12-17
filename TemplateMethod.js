class DataReader {
    readData() {
        console.log('Started reading data')
        this.read()
        console.log('Stopped reading data')
    }

    read() {}
}

class CSVDataReader extends DataReader {
    read() {
        console.log("Reading from CSV")
    }
}

class JSONDataReader extends DataReader {
    read() {
        console.log("Reading from JSON")
    }
}

class ExcelDataReader extends DataReader {
    read() {
        console.log("Reading from Excel")
    }
}

class App {
    static run() {
        const csvDataReader = new CSVDataReader()
        csvDataReader.readData()
        const jsonDataReader = new JSONDataReader()
        jsonDataReader.readData()
        const excelDataReader = new ExcelDataReader()
        excelDataReader.readData()
    }
}

App.run()