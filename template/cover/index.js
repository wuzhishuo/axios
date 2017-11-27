var instance = require('./instance');
var util = require('{{$$.relative("util")}}');

var convertRESTAPI = util.convertRESTAPI;

<% _.forEach(data.mocks, function (mock) { %>/** {{mock.description}} */
  function { { mock.description } }(opts) {
    return instance({
      method: '{{mock.method}}',
      url: <% if($$.isREST(mock.url)) {%> convertRESTAPI('{{mock.url}}', opts) <%} else {%> '{{mock.url}}' <% } %>,
      opts: opts
  });
}

<% }) %> module.exports= {<% _.forEach(data.mocks, function (mock, i) { %>
  {{ mock.description }
}: {{ mock.description }} <% if (data.mocks.length - 1 !== i) { %>,<% } %><% }) %>
};
