const locationsController = require('../../../app_server/controllers/locations');

describe('Locations controller', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      render: jest.fn()
    };
  });

  describe('homeList', () => {
    it('should render the index template with the correct title', () => {
      locationsController.homeList(req, res);
      expect(res.render).toHaveBeenCalledWith('index', { title: 'Home' });
    });
  });

  describe('locationInfo', () => {
    it('should render the location-info template with correct data', () => {
      locationsController.locationInfo(req, res);
      expect(res.render).toHaveBeenCalledWith('location-info', expect.objectContaining({
        title: 'Starcups',
        pageHeader: expect.objectContaining({ title: 'Starcups' }),
        location: expect.objectContaining({
          name: 'Starcups',
          address: '125 High Street, Reading, RG6 1PS'
        })
      }));
    });
  });

  describe('addReview', () => {
    it('should render the index template with the correct title for adding a review', () => {
      locationsController.addReview(req, res);
      expect(res.render).toHaveBeenCalledWith('index', { title: 'Add Review' });
    });
  });
});
