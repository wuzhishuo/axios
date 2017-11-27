function createAPI(baseURL) {
  return function (conf) {
    conf = conf || {};
    if (/.\/$/.test(baseURL)) {
      baseURL = baseURL.substr(0, baseURL.lastIndexOf("/"));
    }

    if (!/^\//.test(conf.url)) {
      conf.url = `/${conf.url}`;
    }

    return wx.request({
      url: `${baseURL}${conf.url}`,
      method: conf.method.toUpperCase(),
      data: conf.data,
      header: {
        "Content-Type": "json",
        ...conf.header
      },
      dataType: 'json',
      success: function (res) {
        if (res.statusCode !== 200) {
          wx.showToast({
            title: "请求失败"
          })

          return;
        }

        if (typeof conf.success === 'function') {
          conf.success(res.data);
        }
      },
      fail: function (res) {

      }
    })
  };
}

function convertRESTAPI(url, opts) {
  if (!opts || !opts.path) return url;

  const pathKeys = Object.keys(opts.path);

  pathKeys.forEach((key) => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g');
    url = url.replace(r, opts.path[key]);
  });

  return url;
}

module.exports = {
  createAPI,
  convertRESTAPI
};
