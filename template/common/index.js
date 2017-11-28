<% _.forEach(config.projects, function (project) { %>var {{$$.convertUrl(project.name)}} = require('./{{project.name}}/index');<% }) %>

  module.exports= {<% _.forEach(config.projects, function (project, i) { %>
    {{ $$.convertUrl(project.name) }}<% if (config.projects.length - 1 !== i) { %>,<% } %><% }) %>
};
