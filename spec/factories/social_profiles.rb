FactoryGirl.define do
  factory :social_profile do
    user nil
    provider "MyString"
    uid "MyString"
    name "MyString"
    nickname "MyString"
    email "MyString"
    url "MyString"
    image ""
    description "MyString"
    other "MyText"
    credencials "MyText"
    raw_info "MyText"
  end
end
