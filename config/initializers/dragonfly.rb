app = Dragonfly[:theLitographyProject]
app.datastore = Dragonfly::DataStorage::S3DataStore.new
app.datastore.configure do |c|
  c.bucket_name = ENV['S3_BUCKET_NAME']
  c.access_key_id = ENV['AWS_ACCESS_KEY_ID']
  c.secret_access_key = ENV['AWS_SECRET_ACCESS_KEY']
  c.region = 'us-west-2'                        # defaults to 'us-east-1'
  c.url_scheme = 'https'                        # defaults to 'http'
end