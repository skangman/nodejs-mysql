const whois = require('whois');

function lookupDomain(domainName, callback) {
    whois.lookup(domainName, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            const domainInfoArray = data.split('\n');
            callback(null, domainInfoArray);
        }
    });
}

function extractInfo(array, key) {
    const line = array.find((line) => line.includes(key));
    return line ? line.split(':').slice(1).join(':').trim() : 'Not available';
}

function extractNameServers(array) {
    const nsLines = array.filter((line) => line.toLowerCase().includes('name server'));
    const nameServers = nsLines.map((line) => line.split(':').slice(1).join(':').trim());
    return nameServers.length > 0 ? nameServers : ['Not available'];
}


exports.lookupDomain = async (req, res, next) => {
    var domainToLookup = await req.params.domainToLookup;

    lookupDomain(domainToLookup, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching domain information' });
        } else {
            // Extracting specific information from the array
            const registrationDate = extractInfo(result, 'Creation Date');
            const domainName = extractInfo(result, 'Domain Name');
            const registrar = extractInfo(result, 'Registrar');
            const DNSSEC = extractInfo(result, 'DNSSEC');
            const nameServers = extractNameServers(result);
            const status = extractInfo(result, 'Status');
            const updateDate = extractInfo(result, 'Updated date');
            const createdDate = extractInfo(result, 'Created date');
            const expDate = extractInfo(result, 'Exp date');
            const DomainHOr = extractInfo(result, 'Domain Holder Organization');
            const DomainHSt = extractInfo(result, 'Domain Holder Street');
            const DomainHCo = extractInfo(result, 'Domain Holder Country');
            const TechCon = extractInfo(result, 'Tech Contact');
            const TechOrg = extractInfo(result, 'Tech Organization');
            const TechStr = extractInfo(result, 'Tech Street');
            const TechCou = extractInfo(result, 'Tech Country');

            res.json({ registrationDate, domainName, registrar, DNSSEC, nameServers, status, updateDate, createdDate, expDate, DomainHOr, DomainHSt, DomainHCo, TechCon, TechOrg, TechStr, TechCou });

            // res.json(result);

        }
    });
}