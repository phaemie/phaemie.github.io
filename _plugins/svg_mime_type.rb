require 'jekyll-svg-plugin'
require 'webrick'
include WEBrick
WEBrick::HTTPUtils::DefaultMimeTypes.store 'svg', 'image/svg+xml'