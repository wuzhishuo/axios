var instance = require('./instance');
var util = require('{{$$.relative("util")}}');

var convertRESTAPI = util.convertRESTAPI;

<% _.forEach(data.mocks, function (mock) { %>
  function {{ mock.description }}(opts) {
    opts.method = '{{mock.method.toUpperCase()}}';
    <% if($$.isREST(mock.url)) {%>opts.url=convertRESTAPI('{{mock.url}}', opts.data) <%} else {%> opts.url='{{mock.url}}' <% } %>;
    return instance(opts);
}

<% }) %> module.exports= {<% _.forEach(data.mocks, function (mock, i) { %>
  {{ mock.description }} <% if (data.mocks.length - 1 !== i) { %>,<% } %><% }) %>
};
