<% _.forEach(config.projects, function (project) { %>var {{ project.name } } = require('./{{$$.convertUrl(project.name)}}');<% }) %>

  module.exports= {<% _.forEach(config.projects, function (project, i) { %>
    {{ $$.convertUrl(project.name) }
  }: {{ $$.convertUrl(project.name) }}<% if (config.projects.length - 1 !== i) { %>,<% } %><% }) %>
};
