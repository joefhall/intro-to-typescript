// Below is a real example of data from an external API: https://developer.transportapi.com/docs#get-/v3/uk/public_journey.json

const journey = {
  request_time: '2021-04-28T14:50:44+01:00',
  source: 'TfL journey planning API',
  acknowledgements: 'Transport for London',
  routes: [
    {
      duration: '00:23:00',
      departure_time: '17:56',
      arrival_time: '18:19',
      distance: 1153,
      distance_desc: '1260 yards',
      route_parts: [
        {
          mode: 'tube',
          from_point_name: 'Euston',
          to_point_name: 'Green Park',
          destination: 'Brixton',
          duration: '00:05:00',
          departure_time: '17:56',
          arrival_time: '18:01',
          coordinates: [
            [-0.13208, 51.52811],
            [-0.13701, 51.52622],
          ],
          distance: 100,
          distance_desc: '109 yards',
        },
        {
          mode: 'foot',
          from_point_name: 'Westminster',
          to_point_name: 'Downing Street, Westminster',
          destination: '',
          duration: '00:12:00',
          departure_time: '18:07',
          arrival_time: '18:19',
          coordinates: [
            [-0.12607, 51.50125],
            [-0.12612, 51.50125],
          ],
          distance: 1053,
          distance_desc: '1151 yards',
        },
      ],
    },
  ],
};

// It's a complex object full of nested objects, arrays and properties that's difficult to work with
// We can make it much clearer and easier to work with by breaking it into different interfaces/types

interface JourneyRequest {
  app_id: string;
  app_key: string;
  from: string;
  to: string;
  date?: string;
  time?: string;
  journey_time_type?: JourneyTimeType;
  service?: JourneyService;
  modes?: JourneyMode[];
}

enum JourneyTimeType {
  ArriveBy = 'arrive_by',
  LeaveAfter = 'leave_after',
}

enum JourneyService {
  TFL = 'tfl',
  Traveline = 'traveline',
  Silverrail = 'silverrail',
  TransportApiOtp = 'transportapi_otp',
}

enum JourneyMode {
  Boat = 'boat',
  Bus = 'bus',
  DLR = 'dlr',
  Metro = 'metro',
  Overground = 'overground',
  Train = 'train',
  Tram = 'tram',
  Tube = 'tube',
  Unknown = 'unknown',
  Wait = 'wait',
}
