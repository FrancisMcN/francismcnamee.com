function shouldAddCountryPrefix(countryCode) {
    switch (countryCode) {
        case "BS": // the Bahamas
        case "KY": // the Cayman Islands
        case "CF": // the Central African Republic
        case "KM": // the Comoros
        case "DO": // the Dominican Republic
        case "FK": // the Falkland Islands
        case "GM": // the Gambia
        case "IM": // the Isle of Man
        case "CK": // the Cook Islands
        case "IC": // the Canary Islands
        case "MV": // the Maldives (the Maldive Islands)
        case "MH": // the Marshall Islands
        case "NL": // the Netherlands
        case "PH": // the Philippines
        case "SB": // the Solomon Islands
        case "TC": // the Turks and Caicos Islands
        case "AE": // the United Arab Emirates
        case "GB": // the United Kingdom
        case "UK": // the United Kingdom
        case "US": // the United States
        case "VG": // the British Virgin Islands
        case "VI": // the US Virgin Islands
            return true;
        default:
            return false;
    }
}

function generateCountries() {
    // Generate country names
    let getCountryNames = new Intl.DisplayNames(['en'], {type: 'region'});

    let output = {};
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            
            let code = (String.fromCharCode(97 + i) + String.fromCharCode(97 + j)).toUpperCase();
            let countryName = getCountryNames.of(code);

            if (countryName.length > 2) {	
                output[code] = countryName;
            }
        }
    }
    console.log(JSON.stringify(output, null, 4))
}

// Generated by running the generateCountries() method above. Pre-generated
// ahead of time to maximize compatibility across browsers.
let countries = {
    "AC": "Ascension Island",
    "AD": "Andorra",
    "AE": "United Arab Emirates",
    "AF": "Afghanistan",
    "AG": "Antigua & Barbuda",
    "AI": "Anguilla",
    "AL": "Albania",
    "AM": "Armenia",
    "AN": "Curaçao",
    "AO": "Angola",
    "AQ": "Antarctica",
    "AR": "Argentina",
    "AS": "American Samoa",
    "AT": "Austria",
    "AU": "Australia",
    "AW": "Aruba",
    "AX": "Åland Islands",
    "AZ": "Azerbaijan",
    "BA": "Bosnia & Herzegovina",
    "BB": "Barbados",
    "BD": "Bangladesh",
    "BE": "Belgium",
    "BF": "Burkina Faso",
    "BG": "Bulgaria",
    "BH": "Bahrain",
    "BI": "Burundi",
    "BJ": "Benin",
    "BL": "St. Barthélemy",
    "BM": "Bermuda",
    "BN": "Brunei",
    "BO": "Bolivia",
    "BQ": "Caribbean Netherlands",
    "BR": "Brazil",
    "BS": "Bahamas",
    "BT": "Bhutan",
    "BU": "Myanmar (Burma)",
    "BV": "Bouvet Island",
    "BW": "Botswana",
    "BY": "Belarus",
    "BZ": "Belize",
    "CA": "Canada",
    "CC": "Cocos (Keeling) Islands",
    "CD": "Congo - Kinshasa",
    "CF": "Central African Republic",
    "CG": "Congo - Brazzaville",
    "CH": "Switzerland",
    "CI": "Côte d’Ivoire",
    "CK": "Cook Islands",
    "CL": "Chile",
    "CM": "Cameroon",
    "CN": "China",
    "CO": "Colombia",
    "CP": "Clipperton Island",
    "CQ": "Sark",
    "CR": "Costa Rica",
    "CS": "Serbia",
    "CU": "Cuba",
    "CV": "Cape Verde",
    "CW": "Curaçao",
    "CX": "Christmas Island",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "DD": "Germany",
    "DE": "Germany",
    "DG": "Diego Garcia",
    "DJ": "Djibouti",
    "DK": "Denmark",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "DY": "Benin",
    "DZ": "Algeria",
    "EA": "Ceuta & Melilla",
    "EC": "Ecuador",
    "EE": "Estonia",
    "EG": "Egypt",
    "EH": "Western Sahara",
    "ER": "Eritrea",
    "ES": "Spain",
    "ET": "Ethiopia",
    "EU": "European Union",
    "EZ": "Eurozone",
    "FI": "Finland",
    "FJ": "Fiji",
    "FK": "Falkland Islands (Islas Malvinas)",
    "FM": "Micronesia",
    "FO": "Faroe Islands",
    "FR": "France",
    "FX": "France",
    "GA": "Gabon",
    "GB": "United Kingdom",
    "GD": "Grenada",
    "GE": "Georgia",
    "GF": "French Guiana",
    "GG": "Guernsey",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GL": "Greenland",
    "GM": "Gambia",
    "GN": "Guinea",
    "GP": "Guadeloupe",
    "GQ": "Equatorial Guinea",
    "GR": "Greece",
    "GS": "South Georgia & South Sandwich Islands",
    "GT": "Guatemala",
    "GU": "Guam",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HK": "Hong Kong",
    "HM": "Heard & McDonald Islands",
    "HN": "Honduras",
    "HR": "Croatia",
    "HT": "Haiti",
    "HU": "Hungary",
    "HV": "Burkina Faso",
    "IC": "Canary Islands",
    "ID": "Indonesia",
    "IE": "Ireland",
    "IL": "Israel",
    "IM": "Isle of Man",
    "IN": "India",
    "IO": "British Indian Ocean Territory",
    "IQ": "Iraq",
    "IR": "Iran",
    "IS": "Iceland",
    "IT": "Italy",
    "JE": "Jersey",
    "JM": "Jamaica",
    "JO": "Jordan",
    "JP": "Japan",
    "KE": "Kenya",
    "KG": "Kyrgyzstan",
    "KH": "Cambodia",
    "KI": "Kiribati",
    "KM": "Comoros",
    "KN": "St. Kitts & Nevis",
    "KP": "North Korea",
    "KR": "South Korea",
    "KW": "Kuwait",
    "KY": "Cayman Islands",
    "KZ": "Kazakhstan",
    "LA": "Laos",
    "LB": "Lebanon",
    "LC": "St. Lucia",
    "LI": "Liechtenstein",
    "LK": "Sri Lanka",
    "LR": "Liberia",
    "LS": "Lesotho",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LV": "Latvia",
    "LY": "Libya",
    "MA": "Morocco",
    "MC": "Monaco",
    "MD": "Moldova",
    "ME": "Montenegro",
    "MF": "St. Martin",
    "MG": "Madagascar",
    "MH": "Marshall Islands",
    "MK": "North Macedonia",
    "ML": "Mali",
    "MM": "Myanmar (Burma)",
    "MN": "Mongolia",
    "MO": "Macao",
    "MP": "Northern Mariana Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MS": "Montserrat",
    "MT": "Malta",
    "MU": "Mauritius",
    "MV": "Maldives",
    "MW": "Malawi",
    "MX": "Mexico",
    "MY": "Malaysia",
    "MZ": "Mozambique",
    "NA": "Namibia",
    "NC": "New Caledonia",
    "NE": "Niger",
    "NF": "Norfolk Island",
    "NG": "Nigeria",
    "NH": "Vanuatu",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NP": "Nepal",
    "NR": "Nauru",
    "NU": "Niue",
    "NZ": "New Zealand",
    "OM": "Oman",
    "PA": "Panama",
    "PE": "Peru",
    "PF": "French Polynesia",
    "PG": "Papua New Guinea",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Poland",
    "PM": "St. Pierre & Miquelon",
    "PN": "Pitcairn Islands",
    "PR": "Puerto Rico",
    "PS": "Palestine",
    "PT": "Portugal",
    "PW": "Palau",
    "PY": "Paraguay",
    "QA": "Qatar",
    "QO": "Outlying Oceania",
    "RE": "Réunion",
    "RH": "Zimbabwe",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russia",
    "RW": "Rwanda",
    "SA": "Saudi Arabia",
    "SB": "Solomon Islands",
    "SC": "Seychelles",
    "SD": "Sudan",
    "SE": "Sweden",
    "SG": "Singapore",
    "SH": "St. Helena",
    "SI": "Slovenia",
    "SJ": "Svalbard & Jan Mayen",
    "SK": "Slovakia",
    "SL": "Sierra Leone",
    "SM": "San Marino",
    "SN": "Senegal",
    "SO": "Somalia",
    "SR": "Suriname",
    "SS": "South Sudan",
    "ST": "São Tomé & Príncipe",
    "SU": "Russia",
    "SV": "El Salvador",
    "SX": "Sint Maarten",
    "SY": "Syria",
    "SZ": "Eswatini",
    "TA": "Tristan da Cunha",
    "TC": "Turks & Caicos Islands",
    "TD": "Chad",
    "TF": "French Southern Territories",
    "TG": "Togo",
    "TH": "Thailand",
    "TJ": "Tajikistan",
    "TK": "Tokelau",
    "TL": "Timor-Leste",
    "TM": "Turkmenistan",
    "TN": "Tunisia",
    "TO": "Tonga",
    "TP": "Timor-Leste",
    "TR": "Türkiye",
    "TT": "Trinidad & Tobago",
    "TV": "Tuvalu",
    "TW": "Taiwan",
    "TZ": "Tanzania",
    "UA": "Ukraine",
    "UG": "Uganda",
    "UK": "United Kingdom",
    "UM": "U.S. Outlying Islands",
    "UN": "United Nations",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VA": "Vatican City",
    "VC": "St. Vincent & Grenadines",
    "VD": "Vietnam",
    "VE": "Venezuela",
    "VG": "British Virgin Islands",
    "VI": "U.S. Virgin Islands",
    "VN": "Vietnam",
    "VU": "Vanuatu",
    "WF": "Wallis & Futuna",
    "WS": "Samoa",
    "XA": "Pseudo-Accents",
    "XB": "Pseudo-Bidi",
    "XK": "Kosovo",
    "YD": "Yemen",
    "YE": "Yemen",
    "YT": "Mayotte",
    "YU": "Serbia",
    "ZA": "South Africa",
    "ZM": "Zambia",
    "ZR": "Congo - Kinshasa",
    "ZW": "Zimbabwe",
    "ZZ": "Unknown Region"
}

function getFlagEmoji (countryCode) {
    let codePoints = countryCode.toUpperCase().split('').map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

function sendIpRequest(event){
    // Prevent default behaviour and page refresh
    event.preventDefault();

    let ip = document.getElementById("ipToLookup").value
    fetch(`https://ip.francismcnamee.com/${ip}`, {method: "get"})
        .then(function(response) {
            if (!response.ok) {
                return Promise.reject(response)
            }
              return response.json();
        })
        .then(function(data) {
            document.getElementById("ipData").style.display = "block";
            if (Object.hasOwn(data, 'country') && Object.hasOwn(data, 'ip')) {
                let countryPrefix = "";
                if (shouldAddCountryPrefix(data.country)) {
                    countryPrefix = "the ";
                }
                document.getElementById("ipOutput").innerHTML = `<div class="ipResponse"><strong>${data.ip}</strong> belongs to ${countryPrefix}<strong>${countries[data.country]}</strong><br /><span class="flag">${getFlagEmoji(data.country)}</span></div>`;
            }
        })
        .catch(function(error) {
            return error.json()
                .then(function(error) {
                    document.getElementById("ipData").style.display = "block";
                    document.getElementById("ipOutput").innerHTML = `<div class="ipResponse"><strong>${error.error}</strong></div>`;
                })
        })
}