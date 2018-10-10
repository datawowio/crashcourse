Rails.application.routes.draw do
  get 'pages/todo_list'
  resource :articles, only: %w(index show)
  resource :users, only: %w(show index)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
