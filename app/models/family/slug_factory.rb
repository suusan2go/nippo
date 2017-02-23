class Family::SlugFactory
  class << self
    def general_from_email(email:)
      slug = Mail::Address.new(email).local.delete('.+').underscore
      slug << [*a..z].sample(1) while Family.where(slug: slug).exists?
      slug
    end
  end
end
