module.exports = `<html lang="en">
<head>
  <title>Auth0 - Client Debugger</title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/4.6.13/lib/logos/img/favicon.png">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styles/zocial.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.1715/css/index.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/4.6.13/index.css">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/github.min.css">
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js"></script>
  <style type="text/css">
    p.controls-info {
      font-size: 13px;
      color: #000;
      opacity: .56;
      line-height: 18px;
      margin: 8px 0 0 0;
      clear: both;
    }
    code.xml {
      color: black !important;
      background-color: #fbfbfb !important;
      margin-top: -25px !important;
      margin-bottom: -51px !important;
    }

    pre.json-object {
      background-color: #fbfbfb;
      border: 1px solid #f1f1f1;
      border-radius: 0px;
      padding: 10px 10px;
      font-size: 12px;
    }

    .json-object .json-key {
      color: #16214D;
    }

    .json-object .json-value {
      color: #01B48F;
    }

    .json-object .json-string {
      color: #EB5424;
    }
  </style>
</head>
<body>
<div id="app">
  <div>
    <header class="dashboard-header">
      <nav role="navigation" class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <h1 class="navbar-brand" style="padding-top: 0px;"><a href="https://manage.auth0.com"><span>Auth0</span></a></h1>
          </div>
          <div id="navbar-collapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a target="_blank" href="https://auth0.com/support">Help &amp; Support</a></li>
              <li><a target="_blank" href="https://auth0.com/docs">Documentation</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="row">
            <div class="col-xs-12">
              <h1 class="pull-left" style="padding-top: 10px;">Client Debugger</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
            	<div class="widget-title title-with-nav-bars">
            		<ul id="tabs" class="nav nav-tabs">
            			<li class="active"><a data-toggle="tab" href="#login"><span class="tab-title">Login</span></a></li>
              		<li><a data-toggle="tab" href="#request"><span class="tab-title">Request</span></a></li>
            		</ul>
            	</div>
            	<div id="content-area" class="tab-content">
                <div id="login" class="tab-pane active">
                  <div class="row">
                    <div class="col-xs-12">
                      <h4>Login Using</h4>
                      <button id="saml" class="btn btn-primary">SAML</button>
                      <button id="wsfed" class="btn btn-primary">WS-Federation</button>
                      <button id="oidc_oauth2" class="btn btn-primary">OAuth2 / OIDC User Flow</button>
                      <br />
                      <br />
                      <button id="oauth2_client_credentials" class="btn btn-primary">OAuth2 Client Credentials</button>
                      <button id="oauth2_code_exchange" class="btn btn-primary">OAuth2 Code Exchange</button>
                      <button id="oauth2_refresh_token_exchange" class="btn btn-primary">OAuth2 Refresh Token Exchange</button>
                      <p class="controls-info">Rendering (including of hash fragment, client credentials ...) happens on the server, which means that in some cases your tokens might be sent to the webtask hosting this page.</p>
                    </div>
                    <div class="col-xs-12" style="margin-top: 25px">
                      <div>
                        <h4>Account Settings</h4>
                        <p>Enter your account settings here (these will be persisted in localstorage).</p>
                        <form class="form-horizontal col-xs-12">
                          <div class="form-group"><label class="col-xs-2 control-label">Domain</label>
                            <div class="col-xs-10">
                              <input id="domain" type="text" class="form-control" value="you.auth0.com">
                            </div>
                          </div>
                          <div class="form-group"><label class="col-xs-2 control-label">Client ID</label>
                            <div class="col-xs-10">
                              <input id="client_id" type="text" class="form-control" value="">
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-xs-2 control-label">Client Secret</label>
                            <div class="col-xs-6">
                              <input id="client_secret" type="password" class="form-control" value="">
                              <p class="controls-info">Don't store any production secrets here.</p>
                            </div>
                            <div class="col-xs-4">
                              <div class="ui-switch ui-switch-labeled ui-switch-xl">
                                <input id="save_client_secret" type="checkbox" />
                                <label data-label-true="Save in Local Storage" data-label-false="Don't Save in Local Storage" class="status"></label>
                              </div>
                            </div>
                          </div>
                        </form>

                        <h4>Debugger Settings</h4>
                        <form class="form-horizontal col-xs-12">
                          <div class="form-group"><label class="col-xs-2 control-label">Callback URL</label>
                            <div class="col-xs-10">
                              <input id="callback_url" readonly type="text" class="form-control" value="">
                              <p class="controls-info">Make sure you configure this as the Callback Url on your client.</p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-xs-2 control-label">SSO</label>
                            <div class="col-xs-3">
                              <div class="ui-switch">
                                <input id="use_sso" type="checkbox"/>
                                <label class="status"></label>
                              </div>
                            </div>
                          </div>
                          <div class="form-group"><label class="col-xs-2 control-label">State</label>
                            <div class="col-xs-10">
                              <input id="state" type="text" class="form-control" value="">
                              <p class="controls-info">This might translate to RelayState or wctx depending on the protocol.</p>
                            </div>
                          </div>
                          <div class="form-group"><label class="col-xs-2 control-label">Connection</label>
                            <div class="col-xs-10">
                              <input id="connection" type="text" class="form-control" value="">
                              <p class="controls-info">Sprecify the name of a connection to skip the login page (eg: <strong>google-oauth2</strong>).</p>
                            </div>
                          </div>
                        </form>
                        <h4>OAuth2 / OIDC Settings</h4>
                        <p>The following settings only apply to the OAuth2 / OIDC endpoints and might behave differently if you're using OAuth2 as a Service (Preview)</p>
                        <form class="form-horizontal col-xs-12">
                          <div class="form-group">
                            <label class="col-xs-2 control-label">Audience</label>
                            <div class="col-xs-7">
                              <input id="audience" type="text" class="form-control" value="">
                              <p class="controls-info">Only required when you need an access token.</p>
                            </div>
                            <div class="col-xs-3">
                              <div class="ui-switch">
                                <input id="use_audience" type="checkbox"/>
                                <label class="status"></label>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-xs-2 control-label">Authorization Code</label>
                            <div class="col-xs-10">
                              <input id="authorization_code" type="text" class="form-control" value="{{authorization_code}}">
                              <p class="controls-info">Set the response type to <strong>code</strong> and then press the <strong>OIDC / OAuth2</strong> button to get an authorization code.</p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-xs-2 control-label">Refresh Token</label>
                            <div class="col-xs-10">
                              <input id="refresh_token" type="text" class="form-control" value="{{refresh_token}}">
                              <p class="controls-info">Set the response type to <strong>code</strong>, request the <strong>offline_access</strong> scope and then press the <strong>OIDC / OAuth2</strong> button to get an authorization code.</p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-xs-2 control-label">Response Type</label>
                            <div class="col-xs-10">
                              <input id="response_type" type="text" class="form-control" value="">
                              <p class="controls-info">You can try a mix of <strong>code</strong>, <strong>id_token</strong>, <strong>token</strong></p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-xs-2 control-label">Response Mode</label>
                            <div class="col-xs-10">
                              <input id="response_mode" type="text" class="form-control" value="">
                              <p class="controls-info">You can try something like <strong>fragment</strong>, <strong>query</strong> or <strong>form_post</strong></p>
                            </div>
                          </div>
                          <div class="form-group"><label class="col-xs-2 control-label">Scope</label>
                            <div class="col-xs-10">
                              <input id="scope" type="text" class="form-control" value="openid name email">
                              <p class="controls-info">You can try something like <strong>openid name email read:appointments</strong></p>
                            </div>
                          </div>
                          <div class="form-group"><label class="col-xs-2 control-label">Prompt</label>
                            <div class="col-xs-10">
                              <input id="prompt" type="text" class="form-control" value="openid name email">
                              <p class="controls-info">You can try something like <strong>consent</strong> or <strong>login</strong></p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            		<div id="request" class="tab-pane">
                  <div class="row">
                    <div class="col-xs-12">
                      <div>
                        <h5>Details</h5>
                        <form class="form-horizontal col-xs-12">
                          <div class="form-group"><label class="col-xs-1 control-label">Method</label>
                            <div class="col-xs-11"><input type="text" readonly="" class="form-control" value="{{method}}"></div>
                          </div>
                          <div class="form-group"><label class="col-xs-1 control-label">Url</label>
                            <div class="col-xs-11"><input type="text" readonly="" class="form-control" value="{{baseUrl}}"></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {{#if body}}
                  <div class="row">
                    <div class="col-xs-12">
                      <div>
                        <h5>Body</h5>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <pre class="json-object">{{{body}}}</pre>
                    </div>
                  </div>
                  {{/if}}
                  {{#if id_token}}
                  <div class="row">
                    <div class="col-xs-12">
                      <div>
                        <h5>ID Token</h5>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <pre class="json-object">{{{id_token}}}</pre>
                    </div>
                  </div>
                  {{/if}}
                  {{#if access_token}}
                  <div class="row">
                    <div class="col-xs-12">
                      <div>
                        <h5>Access Token</h5>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <pre class="json-object">{{{access_token}}}</pre>
                    </div>
                  </div>
                  {{/if}}
                  <div id="hash_fragment"></div>
                  {{#if samlResponse}}
                  <div class="row">
                    <div class="col-xs-12">
                      <div>
                        <h5>SAML Response</h5>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <pre>
                        <code class="xml">{{{samlResponse}}}</code>
                      </pre>
                    </div>
                  </div>
                  {{/if}}
                  {{#if wsFedResult}}
                  <div class="row">
                    <div class="col-xs-12">
                      <div>
                        <h5>WS-Federation Result</h5>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <pre>
                        <code class="xml">{{{wsFedResult}}}</code>
                      </pre>
                    </div>
                  </div>
                  {{/if}}
                  {{#if query}}
                  <div class="row">
                    <div class="col-xs-12">
                      <div>
                        <h5>Query</h5>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <pre class="json-object">{{{query}}}</pre>
                    </div>
                  </div>
                  {{/if}}
                  <div class="row">
                    <div class="col-xs-12">
                      <div>
                        <h5>Headers</h5>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <pre class="json-object">{{{headers}}}</pre>
                    </div>
                  </div>
            		</div>
            		<div id="login" class="tab-pane">
            		</div>
            	</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modal-dialog" tabindex="-1" role="dialog" aria-hidden="true" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header has-border">
          <button type="button" data-dismiss="modal" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
          <h4 id="modal-title" class="modal-title"></h4>
        </div>
        <div id="modal-body" class="modal-body"></div>
        <div class="modal-footer">
          <button data-dismiss="modal" id="close-modal" type="button" class="btn btn-primary">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.js"></script>
<script src="//cdn.auth0.com/w2/auth0-6.js"></script>
<script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.1715/js/bundle.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
<script type="text/javascript">
function read() {
  $('#domain').val(localStorage.getItem('domain') || 'sandrino.auth0.com');
  $('#connection').val(localStorage.getItem('connection'));
  $('#client_id').val(localStorage.getItem('client_id') || 'IsTxQ7jAYAXL5r5HM4L1RMzsSG0UHeOy');
  $('#client_secret').val(localStorage.getItem('client_secret'));
  $('#save_client_secret').prop('checked', localStorage.getItem('client_secret') && localStorage.getItem('client_secret').length);
  $('#audience').val(localStorage.getItem('audience'));
  $('#scope').val(localStorage.getItem('scope') || 'openid name email nickname');
  $('#state').val(localStorage.getItem('state') || 'my-custom-state');
  $('#prompt').val(localStorage.getItem('prompt') || '');
  $('#response_type').val(localStorage.getItem('response_type') || 'token');
  $('#response_mode').val(localStorage.getItem('response_mode') || '');
  $('#use_audience').prop('checked', !!localStorage.getItem('use_audience'));
  $('#use_sso').prop('checked', !!localStorage.getItem('use_sso'));
  $('#callback_url').val(window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + window.location.pathname);
}

function save() {
  localStorage.setItem('domain', $('#domain').val());
  localStorage.setItem('connection', $('#connection').val());
  localStorage.setItem('client_id', $('#client_id').val());
  localStorage.setItem('client_secret', $('#save_client_secret').is(':checked') ? $('#client_secret').val() : '');
  localStorage.setItem('audience', $('#audience').val());
  localStorage.setItem('scope', $('#scope').val());
  localStorage.setItem('state', $('#state').val());
  localStorage.setItem('use_sso', $('#use_sso').is(':checked'));
  localStorage.setItem('prompt', $('#prompt').val());
  localStorage.setItem('response_type', $('#response_type').val());
  localStorage.setItem('response_mode', $('#response_mode').val());
  localStorage.setItem('use_audience', $('#use_audience').is(':checked'));
}

if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}

var callbackUrl = window.location.origin + window.location.pathname;

$(function () {
  read();

  if ("{{method}}" === 'POST' || (window.location.hash && window.location.hash.length > 1) || (window.location.search && window.location.search.length > 1)) {
    $('#tabs a[href="#request"]').tab('show');
  }

  if (window.location.hash && window.location.hash.length > 1) {
    $('#hash_fragment').load(window.location.origin + window.location.pathname + '/hash?' + window.location.hash.replace(/^\#/,""));
  }

  $('#saml').click(function(e) {
    e.preventDefault();
    save();

    var url = 'https://' + $('#domain').val() + '/samlp/' + $('#client_id').val() + '?RelayState=' + encodeURIComponent($('#state').val());

    if ($('#connection').val() && $('#connection').val().length) {
      url = url + '&connection=' + encodeURIComponent($('#connection').val());
    }

    window.location.href = url;
  });

  $('#wsfed').click(function(e) {
    e.preventDefault();
    save();

    var url = 'https://' + $('#domain').val() + '/wsfed/' + $('#client_id').val() + '?wctx=' + encodeURIComponent($('#state').val());

    if ($('#connection').val() && $('#connection').val().length) {
      url = url + '&wtrealm=' + encodeURIComponent($('#connection').val());
    }

    window.location.href = url;
  });

  $('#oauth2_client_credentials').click(function(e) {
    e.preventDefault();
    save();

    $('#modal-title').html('OAuth2 - Client Credentials');
    $('#modal-body').html('Loading...');
    $('#modal-dialog').modal({ show: true });

    var opt = {
      audience: $('#audience').val(),
      client_id: $('#client_id').val(),
      client_secret: $('#client_secret').val(),
      grant_type: 'client_credentials'
    };

    $.post('https://' + $('#domain').val() + '/oauth/token', opt)
      .done(function(data) {
        $.post('{{baseUrl}}/api-call', data)
          .done(function(data) {
            $('#modal-body').html(data);
          })
          .fail(function(err) {
            $('#modal-body').html('<p>Error decoding the response.</p>');
            $('<pre/>', { 'class':'json-object', 'html': err.responseText || err.name || err.text || err.body || err.status }).appendTo('#modal-body');
          });
      })
      .fail(function(err) {
        $('#modal-body').html('');
        $('<pre/>', { 'class':'json-object', 'html': err.responseText || err.name || err.text || err.body || err.status }).appendTo('#modal-body');
      });
  });

  $('#oauth2_code_exchange').click(function(e) {
    e.preventDefault();
    save();

    $('#modal-title').html('OAuth2 - Authorization Code Exchange');
    $('#modal-body').html('Loading...');
    $('#modal-dialog').modal({ show: true });

    var opt = {
      audience: $('#audience').val(),
      client_id: $('#client_id').val(),
      client_secret: $('#client_secret').val(),
      redirect_uri: callbackUrl,
      code: $('#authorization_code').val(),
      grant_type: 'authorization_code'
    };

    $.post('https://' + $('#domain').val() + '/oauth/token', opt)
      .done(function(data) {
        $.post('{{baseUrl}}/api-call', data)
          .done(function(html) {
            if (data && data.refresh_token) {
              $('#refresh_token').val(data.refresh_token);
            }

            $('#modal-body').html(html);
          })
          .fail(function(err) {
            $('#modal-body').html('<p>Error decoding the response.</p>');
            $('<pre/>', { 'class':'json-object', 'html': err.responseText || err.name || err.text || err.body || err.status }).appendTo('#modal-body');
          });
      })
      .fail(function(err) {
        $('#modal-body').html('');
        $('<pre/>', { 'class':'json-object', 'html': err.responseText || err.name || err.text || err.body || err.status }).appendTo('#modal-body');
      });
  });

  $('#oauth2_refresh_token_exchange').click(function(e) {
    e.preventDefault();
    save();

    $('#modal-title').html('OAuth2 - Refresh Token Exchange');
    $('#modal-body').html('Loading...');
    $('#modal-dialog').modal({ show: true });

    var opt = {
      audience: $('#audience').val(),
      client_id: $('#client_id').val(),
      client_secret: $('#client_secret').val(),
      refresh_token: $('#refresh_token').val(),
      grant_type: 'refresh_token'
    };

    $.post('https://' + $('#domain').val() + '/oauth/token', opt)
      .done(function(data) {
        $.post('{{baseUrl}}/api-call', data)
          .done(function(data) {
            $('#modal-body').html(data);
          })
          .fail(function(err) {
            $('#modal-body').html('<p>Error decoding the response.</p>');
            $('<pre/>', { 'class':'json-object', 'html': err.responseText || err.name || err.text || err.body || err.status }).appendTo('#modal-body');
          });
      })
      .fail(function(err) {
        $('#modal-body').html('');
        $('<pre/>', { 'class':'json-object', 'html': err.responseText || err.name || err.text || err.body || err.status }).appendTo('#modal-body');
      });
  });

  $('#oidc_oauth2').click(function(e) {
    e.preventDefault();
    save();

    var auth0 = new Auth0({
      domain: $('#domain').val(),
      clientID: $('#client_id').val(),
      callbackURL: callbackUrl
    });

    var options = {
      state: $('#state').val(),
      sso: $('#use_sso').is(':checked')
    };

    if ($('#scope').val() && $('#scope').val().length) {
      options.scope = $('#scope').val();
    }

    if ($('#connection').val() && $('#connection').val().length) {
      options.connection = $('#connection').val();
    }

    if ($('#use_audience').is(':checked') && $('#audience').val() && $('#audience').val().length) {
      options.audience = $('#audience').val();
    }

    if ($('#response_type').val() && $('#response_type').val().length) {
      options.response_type = $('#response_type').val();
    }

    if ($('#response_mode').val() && $('#response_mode').val().length) {
      options.response_mode = $('#response_mode').val();
    }

    if ($('#prompt').val() && $('#prompt').val().length) {
      options.prompt = $('#prompt').val();
    }

    auth0.login(options);
  });
});
</script>
</body>
</html>
`;
