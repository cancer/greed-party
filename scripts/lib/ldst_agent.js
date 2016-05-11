'use strict';
const client = require('cheerio-httpcli');

////////////
// for Dev
////////////
const DEV_DUTIES = '';
const DEV_DUTY   = '';
const DEV_EMPTY  = '';
////////////

const LDST_TOKEN = {
  DB_URL: 'http://jp.finalfantasyxiv.com/lodestone/playguide/db/',
  DB_DUTY: 'duty/',
  DB_ITEM: 'item/',
  REG_ID_REFS: '/lodestone/playguide/db/.*/(.*)/',
};

function _createUrl(type, id) {
  return LDST_TOKEN.DB_URL + type + id + '/';
}

class LdstAgent {
  constructor() {}

  fetchPrices(url) {
    return client.fetch(url)
      .then(this.parsePrices)
      .catch(err => console.log(err));
  }

  fetchDuties(exVersion = [0, 1]) {
    let url = 'http://jp.finalfantasyxiv.com/lodestone/playguide/db/duty/?category2=4&ex_version=1'
    return client.fetch(url)
      .then(this.parseDuties)
      .catch(err => console.log(err));
  }

  parsePrices(res) {
    let $ = res.$;
    let $containers = $('.item_box');
    let result = [];

    if($containers.length === 0) return null;

    $containers.each((n, elm) => {
      let $target = $(elm);
      let ldstId = $target.find('.ic_reflection_frame.db_popup')
        .attr('data-ldst-href')
        .match(LDST_TOKEN.REG_ID_REFS)[1];

      let name = $target.find('a.db_popup').text();
      let src  = $target.find('img.ic_reflection').attr('src');

      let field = {};
      field.name     = name;
      field.icon     = src;
      field.ldst_id  = ldstId;
      field.ldst_url = _createUrl(LDST_TOKEN.DB_ITEMY, ldstId);

      result.push(field);
    });

    return result;
  }

  parseDuties(res) {
    let $ = res.$;
    let $containers = $('.col_left.latest_patch__major__text').find('.db_popup');
    let result = [];

    $containers.each((n, elm) => {
      let $target = $(elm);
      let name    = $target.text();
      let id      = $target.attr('href').match(LDST_TOKEN.REG_ID_REFS)[1];

      let field = {};
      field.name      = name;
      field.ldst_id   = id;
      field.ldst_url  = _createUrl(LDST_TOKEN.DB_DUTY, id);
      field.has_prices = false;

      result.push(field);
    });

    return result;
  }
}

module.exports = LdstAgent;
