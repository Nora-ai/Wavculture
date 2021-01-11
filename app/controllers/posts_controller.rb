class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy, :add_artist]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end 

  # Associations
  def add_artist
    @post = Post.find(params[:id])
    @artist = Artist.find(params[:artist_id])

    @post.artists << @artist

    render json: @post, include: :artists
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:name, :image, :location, :link, :festival, :recurring, :live, :day_of_week_start, :day_of_week_end, :month_start, :month_end, :day_in_month_start, :day_in_month_end, :year_start, :year_end, :time_start_utc, :time_end_utc, :artist_id, :genre_id, :user_id, :like_id)
    end
end
